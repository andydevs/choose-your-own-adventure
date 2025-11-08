const { stringify } = require("yaml")

const MAX_WIDTH = 120

const HBAR = "\n" + "-".repeat(MAX_WIDTH) + "\n"

function formatDataToYAMLBlock(data) {
    let yamlText = stringify(data, {
        indent: 4,
        defaultKeyType: "PLAIN",
        defaultStringType: "QUOTE_DOUBLE",
        lineWidth: MAX_WIDTH,
    })
    return "```yaml\n" + yamlText + "```"
}

function cleanSpaces(string) {
    return string.replaceAll(/\s+/g, " ")
}

function truncateWords(string) {
    let words = string.split(" ")
    let lines = []
    let line = ""
    words.forEach((word) => {
        if (line.length + word.length + 1 >= MAX_WIDTH) {
            lines.push(line)
            line = ""
        }
        line += (line.length > 0 ? " " : "") + word
    })
    if (line.length > 0) {
        lines.push(line)
    }
    return lines.join("\n")
}

class Story {
    constructor(params) {
        this.title = params.title
        this.description = params.description
        this.author = params.author
        this.parts = params.parts.map((p) => new StoryEvent(p))
    }

    toMDMeta() {
        return {
            title: this.title,
            description: this.description,
            author: this.author,
        }
    }

    toMD() {
        let frontmatter = "---\ntags:\n - creative\n---"
        let metadata = formatDataToYAMLBlock(this.toMDMeta())
        let body = "# Begin\n\n"
        body += this.parts.map((part) => part.toMD()).join("\n" + HBAR + "\n")
        return frontmatter + "\n" + metadata + "\n" + body
    }
}

class StoryEvent {
    constructor(params) {
        this.id = params.id
        this.text = cleanSpaces(params.text)
        this.theend = params.theend
        this.ending = params.ending
        if (params.options) {
            this.options = params.options.map(
                (opt) => new StoryEventOption(opt)
            )
        } else {
            this.options = params.options
        }
    }

    toMDMeta() {
        let metadata = { id: this.id }
        if (this.theend) {
            metadata.theend = true
            metadata.ending = this.ending
        } else {
            metadata.options = this.options.map((opt) => opt.toMDMeta())
        }
        return metadata
    }

    toMD() {
        return (
            truncateWords(this.text) +
            "\n\n" +
            formatDataToYAMLBlock(this.toMDMeta())
        )
    }
}

class StoryEventOption {
    constructor(params) {
        this.id = params.id
        this.text = params.text
    }

    toMDMeta() {
        return {
            id: this.id,
            text: this.text,
        }
    }
}

module.exports = {
    Story,
    StoryEvent,
    StoryEventOption,
    formatDataToYAMLBlock,
    truncateWords,
    HBAR,
    MAX_WIDTH,
}
