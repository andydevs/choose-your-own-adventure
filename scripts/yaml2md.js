const { Story } = require("./yamlmd")
const yaml = require("yaml")
const fs = require("fs")

const YAML_FILE = "app/story.yaml"
const MD_FILE = "Story.md"

const text = fs.readFileSync(YAML_FILE, { encoding: "utf-8" })
const data = yaml.parse(text)
const story = new Story(data)

const mdText = story.toMD()
fs.writeFileSync(MD_FILE, mdText, { encoding: "utf-8" })
