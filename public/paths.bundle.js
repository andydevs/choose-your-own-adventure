/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/paths.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/paths.js":
/*!**********************!*\
  !*** ./app/paths.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_paths_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/paths.scss */ "./app/style/paths.scss");
/* harmony import */ var _style_paths_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_paths_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _story_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story.yaml */ "./app/story.yaml");
var _story_yaml__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./story.yaml */ "./app/story.yaml", 1);
/**
 * Exactly what it says on the tin
 * 
 * Author:  Anshul Kharbanda
 * Created: 10 - 26 - 2020
 */



/***/ }),

/***/ "./app/story.yaml":
/*!************************!*\
  !*** ./app/story.yaml ***!
  \************************/
/*! exports provided: title, description, author, parts, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Oh No! You Farted in an Elevator\",\"description\":\"You've unfortunately found yourself in a bit of a predicament. Make the right choices and you can get away scott free!\\n\",\"author\":\"Anshul Kharbanda\",\"parts\":[{\"id\":\"$\",\"text\":\"Oh no! You farted in an elevator! What do you do?\\n\",\"options\":[{\"id\":\"$a\",\"text\":\"Shout \\\"It wasn't me!\\\"\"},{\"id\":\"$b\",\"text\":\"Remain quiet\"},{\"id\":\"$c\",\"text\":\"Pretend it was someone else\"},{\"id\":\"$d\",\"text\":\"Shout \\\"It was me!\\\"\"}]},{\"id\":\"$a\",\"text\":\"Everyone turns and looks at you  suspiciously. Then someone smells  the smell. \\\"Oh my gawd!\\\" she shrieks. \\\"So that's what you're talking about?\\\" A little boy says \\\"Then how come you  noticed it?\\\"\\n\",\"options\":[{\"id\":\"$aa\",\"text\":\"Pretend it was someone else\"},{\"id\":\"$ab\",\"text\":\"Remain quiet\"}]},{\"id\":\"$b\",\"text\":\"Nobody else seemed to have noticed for a while. But then someone smells the smell. \\\"Oh lawd! Who did that?\\\" she yells. She was right. Maybe you  shouldn't have scorfed down an entire  breakfast burrito while rushing to work. But that doesn't matter right now. They discovered it. What do you do now?\\n\",\"options\":[{\"id\":\"$ba\",\"text\":\"Still say nothing\"},{\"id\":\"$bb\",\"text\":\"Accuse the woman\"},{\"id\":\"$bc\",\"text\":\"Shout \\\"It wasn't me!\\\"\"},{\"id\":\"$bd\",\"text\":\"Apologize\"}]},{\"id\":\"$c\",\"text\":\"You wave your hand in front of your face  as you wail \\\"Aww loordy loo who spewed  the poo?\\\" Everyone stares at you. Then  someone else smells the smell. \\\"Oh jaizus?\\\"  Everyone around them was looking around  for the source of the stench bomb, and you  do the same. But then a little boy shouts  \\\"Whoever smelt it dealt it!\\\". Everyone turns  to you. \\\"You smelt it first\\\" the boy said,  pointing his finger at you, \\\"Was it you?\\\"\\n\",\"options\":[{\"id\":\"$ca\",\"text\":\"Calmly say, \\\"No. Not me.\\\"\"},{\"id\":\"$cb\",\"text\":\"Accuse the boy\"}]},{\"id\":\"$d\",\"text\":\"Everyone stares at you, confused. Then someone smells the smell. \\\"Aww sweet jesus up haaaigh\\\" she shrieks. \\\"Loord save us from this man's asshole. Give us mercy oh laaawd\\\". The elevator doors open. \\\"Ya'll need to get some hygene good  sir\\\" she tells you as she leaves.\\n\",\"theend\":true,\"ending\":\"Honesty's the best policy\"},{\"id\":\"$aa\",\"text\":\"\\\"It was he!\\\" You point the finger to the person  next to you. \\\"What no!\\\" he retorts \\\"It was you  man! What are you talking about?\\\" But then the  little boy from the other side of the elevator shouts \\\"Whoever smelt it dealt it!\\\" The boy  points his finger at you \\\"You smelt it first!\\\"  the boy said, \\\"Was it you?\\\"\\n\",\"options\":[{\"id\":\"$aaa\",\"text\":\"Insist\"},{\"id\":\"$ab\",\"text\":\"Remain silent\"},{\"id\":\"$cb\",\"text\":\"Accuse the boy\"}]},{\"id\":\"$ab\",\"text\":\"You don't say nothing. \\\"Well? What do you have  to say?\\\" someone asks. Suddenly, everyone cringes  at the stench of the mound of jalepenio nachos you  shoved in your gob while binge watching The Office  last night. The jig is up. Everybody knows now.  All you can do is hang your head in shame.\\n\",\"theend\":true,\"ending\":\"Cat Got your Tongue\"},{\"id\":\"$bd\",\"text\":\"\\\"I'm really sorry. It was me\\\" you say, calmly.  The woman looks at you for a second, and then  says \\\"whatever\\\". The elevator door opens at your  stop. But it turns out that it was her stop as  well. You both walk out onto the floor to catch  your breath. Enough time to take one look at her,  and make a big decision that could change the  course of your entire life\\n\",\"options\":[{\"id\":\"$bda\",\"text\":\"Talk to her\"},{\"id\":\"$bdb\",\"text\":\"Leave her alone\"}]},{\"id\":\"$cb\",\"text\":\"You point the finger back at him \\\"Well what about  you?\\\". \\\"Of course it isn't me!\\\" he retorts, You  fold your arms, grinning. \\\"Whoever denied it supplied  it!\\\" you say, confidently. \\\"I got you now!\\\" The boy  loses color. You notice he has one of his hands behind  his back.\\n\",\"options\":[{\"id\":\"$cba\",\"text\":\"Rest your case\"},{\"id\":\"$cbb\",\"text\":\"Point out the hand\"}]},{\"id\":\"$aaa\",\"text\":\"You turn to the guy. \\\"You... farted!\\\" you say dramatically. The man is confused... but then relieved \\\"Ooooohhhh!\\\" He says \\\"I thought you were talking about the bank robbery\\\". Everyone raises their eyebrows and turns to him. His face loses color, as he realizes what he just said. Just then, the elevator door  opens, and he books it outside. \\n\",\"options\":[{\"id\":\"$aaaa\",\"text\":\"Stay in the elevator\"},{\"id\":\"$aaab\",\"text\":\"Run after him\"}]},{\"id\":\"$aaaa\",\"text\":\"Well, whatever was going on there, probably didn't matter to you. You weren't a cop, and it didn't look like he was taking anything from you. The elevator empties on your way down to the parking lot.  Suddenly, you feel a vibration in your left pocket. You reach in and  pull out an old mobile phone that isn't yours. Someone by the name of  \\\"Klaus\\\" seems to be calling you on this phone.\\n\",\"options\":[{\"id\":\"$aaaaa\",\"text\":\"Answer the phone\"},{\"id\":\"$aaaab\",\"text\":\"Ignore it\"},{\"id\":\"$aaaac\",\"text\":\"Throw it at the waaaaalllll\"}]},{\"id\":\"$aaaaa\",\"text\":\"\\\"Is this Klaus?\\\" you say, as you answer the phone. \\\"Um... no.\\\". Even with the british accent, you can tell the man on the other line is  flustered. \\\"I think you have the wrong number...\\\". \\n\",\"options\":[{\"id\":\"$aaaaaa\",\"text\":\"\\\"That makes no sense\\\"\"},{\"id\":\"$aaaaab\",\"text\":\"\\\"Oh okay then\\\"\"}]},{\"id\":\"$aaaaaa\",\"text\":\"\\\"But you're calling me... and your caller ID says Klaus, and-\\\" Klaus cuts you off \\\"I'm going to hang up now\\\". The phone disconnects. \\\"Hmm\\\", you think, \\\"curious\\\". Suddenly the phone rings again, and it's Klaus.\\n\",\"options\":[{\"id\":\"$aaaaaaa\",\"text\":\"Answer it\"},{\"id\":\"$aaaab\",\"text\":\"Ignore it\"}]},{\"id\":\"$aaaaab\",\"text\":\"\\\"Have a good day\\\" you say as you hang up the phone. He probably meant he had the wrong number. \\\"It happens to the best of us\\\", you think.  Suddenly the phone rings again, and it's Klaus.\\n\",\"options\":[{\"id\":\"$aaaaaaa\",\"text\":\"Answer it\"},{\"id\":\"$aaaab\",\"text\":\"Ignore it\"}]},{\"id\":\"$aaaaaaa\",\"text\":\"\\\"Is this Klaus?\\\" you say as you answer again. \\\"Wait what the-\\\", Klaus reacts. \\\"Um... have you seen my grandson? He seems to be missing\\\".\\n\",\"options\":[{\"id\":\"$aaaaaaaa\",\"text\":\"\\\"I think he robbed a bank\\\"\"},{\"id\":\"$aaaaaaab\",\"text\":\"\\\"Nope\\\"\"}]},{\"id\":\"$aaaaaaab\",\"text\":\"\\\"Oh well, um... if you find him, let him know his granddad called\\\" Klaus  hangs up. \\\"Oh, poor Klaus\\\", you wonder to yourself \\\"will he ever find his  grandson?\\\" And, once again, the phone rings, and it's Klaus.\\n\",\"options\":[{\"id\":\"$aaaaaaaaa\",\"text\":\"Answer it\"},{\"id\":\"$aaaab\",\"text\":\"Ignore it\"}]},{\"id\":\"$aaaaaaaa\",\"text\":\"\\\"Um... he did what? That man!\\\" Klaus retorts \\\"I'm going to give that ol' wanker a piece of my mind! Lemme try a different phone!\\\" He hangs up. \\\"Oh, poor Klaus\\\", you wonder to yourself \\\"how can he live with his grandson's crimes?\\\" And, once again, the phone rings, and it's Klaus.\\n\",\"options\":[{\"id\":\"$aaaaaaaaa\",\"text\":\"Answer it\"},{\"id\":\"$aaaab\",\"text\":\"Ignore it\"}]},{\"id\":\"$aaaaaaaaa\",\"text\":\"\\\"Is this Klau-\\\" before you can even answer, Klaus jumps in \\\"Oh for fuck's  sake! Look you bellend! Don't answer the phone!\\\" You respond \\\"Why are you calling me, then?\\\" Klaus responds \\\"Oh to hell with it. Listen, just keep the phone in the elevator, let it ring and go unanswered so we can trigger the explosives!\\\" You are taken aback \\\"Explosives?\\\" Klaus shamelessly admits  to his crimes. Before he hangs up you run outside the elevator to a nearby  police officer. Fortunately, Klaus hadn't hidden his phone number or his  caller ID in any way, so the police were able to capture him and eventually the robber. The Building was saved by your heroism (or stupidity but it still helped so that's good)!\\n\",\"theend\":true,\"ending\":\"Unwitting Hero\"},{\"id\":\"$aaaab\",\"text\":\"You put it back in your pocket. Best not to let them know you didn't  answer right away, otherwise they might get suspicious. As you near  the parking lot exit, the vibrations in your pocket stop. Suddenly,  you hear a loud bang coming from behind you. Instinctively, you book  it to the exit, never looking back because cool guys don't look at  explosions. You make it out just in time to see the Building behind  you fall and crumble to bits, partially shielded from the debris by  the parking lot floors.\\n\",\"options\":[{\"id\":\"$aaaaba\",\"text\":\"Get the heck outta dodge\"},{\"id\":\"$aaaabb\",\"text\":\"Go back in to help\"}]},{\"id\":\"$aaaaba\",\"text\":\"You get in your dodge and drive out of the parking lot. A swarm of  emergency cars surround the rubble. As you're driving away, you  notice that you still have the cell phone in your pocket. \\n\",\"options\":[{\"id\":\"$aaaabaa\",\"text\":\"Turn back\"},{\"id\":\"$aaaabab\",\"text\":\"Go to the station\"},{\"id\":\"$aaaabac\",\"text\":\"Go home\"}]},{\"id\":\"$aaaabaa\",\"text\":\"\\\"Right\\\", you think to yourself, \\\"this mysterious cell phone must be the key to solving the crime!\\\". As you finish your dramatic monologue, you turn the car around and drive back to the scene of the crime. The area is surrounded. Survivors are being helped and accounted for. You arrive as SWAT team members are exiting their vehicles. One cop  approaches your car. \\\"Stop!\\\", he yells, \\\"this area is off limits!\\\"\\n\",\"options\":[{\"id\":\"$aaaabaaa\",\"text\":\"\\\"Wait, officer! I have evidence!\\\"\"},{\"id\":\"$aaaabac\",\"text\":\"Go home\"}]},{\"id\":\"$aaaabaaa\",\"text\":\"\\\"What kind of person farts in an elevator and accuses someone else?\\\" The officer is disgusted by the story you've told. \\\"But anyways,\\\", he continues, \\\"where's this cell phone\\\"? You hand him the device. \\\"Well... it looks like something that someone at the station could analyze. We don't have a computer forensics expert here\\\"\\n\",\"options\":[{\"id\":\"$aaaabab\",\"text\":\"Go to the station\"}]},{\"id\":\"$aaaac\",\"text\":\"You yeet that boi at the wall. It cracks open, letting the battery  fall out and disconnecting the phone. Then the Building explodes\\n\",\"theend\":true,\"ending\":\"Wait, what?\"},{\"id\":\"$bda\",\"text\":\"\\\"Hey, really sorry again about what happened there\\\", you say again. \\\"It's alright, happens to the best of us\\\". She replies, smiling. Her name is Taniesha, and this was the start of a long relationship. You tell this story to your children many years later, as an example of how even our most embarassing moments can lead us to find love.\\n\",\"theend\":true,\"ending\":\"Love at first sniff\"},{\"id\":\"$bdb\",\"text\":\"You watch her walk down the hall, thinking about how you embarassed yourself in that elevator. \\\"Well\\\", you think to yourself, \\\"time to go to work... to my job that I hate to my boss who probably hates me... and to get reprimanded for being late\\\". Just then, you hear a voice calling your  name from behind you. You turn around. It's your boss! And he looks none too pleased. \\\"In my office\\\" he yells.\\n\",\"options\":[{\"id\":\"$bdba\",\"text\":\"Go to the office\"},{\"id\":\"$bdbb\",\"text\":\"Quit your job\"}]},{\"id\":\"$bdba\",\"text\":\"You enter the office Building and sit in front of his desk. He sits behind, leaning back, arms folded. \\\"You know why I brought you in here?\\\"\\n\",\"options\":[{\"id\":\"$bdbaa\",\"text\":\"Joke about being promoted\"},{\"id\":\"$bdbab\",\"text\":\"It's because you were late again.\"},{\"id\":\"$bdbac\",\"text\":\"Pretend you don't know\"}]},{\"id\":\"$bdbaa\",\"text\":\"\\\"Is that what you think?\\\" He says, leaning in? You nod, smiling. He looks at you for a moment. \\\"Well... you're absolutely correct!\\\" He shouts, throwing his arms in the air! You're confused. \\\"Your work ethic and dedication to this job has not gone unnoticed, friend\\\" he  adds \\\" and we would like for you to take on the role of manager!\\\"  You're shocked, numb, but as your former boss ushers you into your  new desk, you feel it set in. Now all that awaits is a life of  moderately more expensive cars and a few more trips to Legal  Seafoods every month. What more could someone ask for?\\n\",\"theend\":true,\"ending\":\"Dat Middle Manager Life\"},{\"id\":\"$bdbab\",\"text\":\"\\\"You know we can't really have people showing up two hours late every day?\\\" He mentions. \\\"I'm sorry, but it doesn't look like we can continue here\\\". You know what the words mean... Head hanging, you get up and leave the office, to your desk to pack your things.\\n\",\"theend\":true,\"ending\":\"Fired\"},{\"id\":\"$bdbac\",\"text\":\"\\\"Well you know what?\\\" the boss asks rhetorically, \\\"I don't remember  either. It was probably nothing.\\\" You nod nervously. \\\"Well, back to  work! Time is money\\\"\\n\",\"options\":[{\"id\":\"$bdbaca\",\"text\":\"Get back to work\"},{\"id\":\"$bdbb\",\"text\":\"Quit your job\"}]},{\"id\":\"$bdbb\",\"text\":\"\\\"How about up your A**!\\\" You pull a mic out of your pocket and  drop a sick diss track on your boss. \\\"You'll never make it as a rap artist! Give it up!\\\" your boss retorts. \\\"Shut yo b****  a** up!\\\" you shut him down and go even harder on the beat. As you walk out the front door of the Building, your hype crowd  follows you. They follow you all the way to your home, to your studio, as you drop the hottest track the world has ever been graced to listen to. Jeff Bezos himself smashes into your house in his Blue Origin capsule and gives you a million dollars in Amazon Basics merchendise. Now all that awaits is a life of  exotic cars and big houses. What more could someone ask for?\\n\",\"theend\":true,\"ending\":\"Dat \\\"Lil' Poop Stain\\\" Life\"}]}");

/***/ }),

/***/ "./app/style/paths.scss":
/*!******************************!*\
  !*** ./app/style/paths.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./paths.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/style/paths.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/style/paths.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/style/paths.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ });
//# sourceMappingURL=paths.bundle.js.map