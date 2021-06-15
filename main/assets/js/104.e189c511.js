(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{598:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upgrade-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-node"}},[e._v("#")]),e._v(" Upgrade Node")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("Learn how to upgrade your full node to the latest software version")]),e._v(" "),a("h2",{attrs:{id:"software-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-upgrade"}},[e._v("#")]),e._v(" Software Upgrade")]),e._v(" "),a("p",[e._v("These instructions are for full nodes that have ran on previous versions of and would like to upgrade to the latest testnet.")]),e._v(" "),a("p",[e._v("First, stop your instance of "),a("code",[e._v("ethermintd")]),e._v(". Next, upgrade the software:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2QgZXRoZXJtaW50CmdpdCBmZXRjaCAtLWFsbCAmYW1wOyZhbXA7IGdpdCBjaGVja291dCAmbHQ7bmV3X3ZlcnNpb24mZ3Q7Cm1ha2UgaW5zdGFsbAo="}}),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("If you have issues at this step, please check that you have the latest stable version of GO installed.")])]),e._v(" "),a("p",[e._v("You will need to ensure that the version installed matches the one needed for th testnet. Check the Ethermint "),a("a",{attrs:{href:"https://github.com/cosmos/ethermint/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("release page"),a("OutboundLink")],1),e._v(" for details on each release.")]),e._v(" "),a("h2",{attrs:{id:"upgrade-genesis-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-genesis-file"}},[e._v("#")]),e._v(" Upgrade Genesis File")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[e._v("If the new version you are upgrading to has breaking changes, you will have to restart your chain. If it is "),a("strong",[e._v("not")]),e._v(" breaking, you can skip to "),a("a",{attrs:{href:"#restart-node"}},[e._v("Restart")]),e._v(".")])]),e._v(" "),a("p",[e._v("To upgrade the genesis file, you can either fetch it from a trusted source or export it locally using the "),a("code",[e._v("ethermintd export")]),e._v(" command.")]),e._v(" "),a("h3",{attrs:{id:"fetch-from-a-trusted-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch-from-a-trusted-source"}},[e._v("#")]),e._v(" Fetch from a Trusted Source")]),e._v(" "),a("p",[e._v("If you are joining an existing testnet, you can fetch the genesis from the appropriate testnet source/repository where the genesis file is hosted.")]),e._v(" "),a("p",[e._v("Save the new genesis as "),a("code",[e._v("new_genesis.json")]),e._v(". Then, replace the old "),a("code",[e._v("genesis.json")]),e._v(" with "),a("code",[e._v("new_genesis.json")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2QgJEhPTUUvLmV0aGVybWludGQvY29uZmlnCmNwIC1mIGdlbmVzaXMuanNvbiBuZXdfZ2VuZXNpcy5qc29uCm12IG5ld19nZW5lc2lzLmpzb24gZ2VuZXNpcy5qc29uCg=="}}),e._v(" "),a("p",[e._v("Finally, go to the "),a("RouterLink",{attrs:{to:"/quickstart/run_node.html#reset-data"}},[e._v("reset data")]),e._v(" section.")],1),e._v(" "),a("h3",{attrs:{id:"export-state-to-a-new-genesis-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-state-to-a-new-genesis-locally"}},[e._v("#")]),e._v(" Export State to a new Genesis locally")]),e._v(" "),a("p",[e._v("Ethermint can dump the entire application state to a JSON file. This, besides upgrades, can be\nuseful for manual analysis of the state at a given height.")]),e._v(" "),a("p",[e._v("Export state with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXRoZXJtaW50ZCBleHBvcnQgJmd0OyBuZXdfZ2VuZXNpcy5qc29uCg=="}}),e._v(" "),a("p",[e._v("You can also export state from a particular height (at the end of processing the block of that height):")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXRoZXJtaW50ZCBleHBvcnQgLS1oZWlnaHQgW2hlaWdodF0gJmd0OyBuZXdfZ2VuZXNpcy5qc29uCg=="}}),e._v(" "),a("p",[e._v("If you plan to start a new network for 0 height (i.e genesis) from the exported state, export with the "),a("code",[e._v("--for-zero-height")]),e._v(" flag:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXRoZXJtaW50ZCBleHBvcnQgLS1oZWlnaHQgW2hlaWdodF0gLS1mb3ItemVyby1oZWlnaHQgJmd0OyBuZXdfZ2VuZXNpcy5qc29uCg=="}}),e._v(" "),a("p",[e._v("Then, replace the old "),a("code",[e._v("genesis.json")]),e._v(" with "),a("code",[e._v("new_genesis.json")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3AgLWYgZ2VuZXNpcy5qc29uIG5ld19nZW5lc2lzLmpzb24KbXYgbmV3X2dlbmVzaXMuanNvbiBnZW5lc2lzLmpzb24K"}}),e._v(" "),a("p",[e._v("At this point, you might want to run a script to update the exported genesis into a genesis state that is compatible with your new version.")]),e._v(" "),a("p",[e._v("You can use the "),a("code",[e._v("migrate")]),e._v(" command to migrate from a given version to the next one (eg: "),a("code",[e._v("v0.X.X")]),e._v(" to "),a("code",[e._v("v1.X.X")]),e._v("):")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXRoZXJtaW50ZCBtaWdyYXRlIFt0YXJnZXQtdmVyc2lvbl0gWy9wYXRoL3RvL2dlbmVzaXMuanNvbl0gLS1jaGFpbi1pZD0mbHQ7bmV3X2NoYWluX2lkJmd0OyAtLWdlbmVzaXMtdGltZT0mbHQ7eXl5eS1tbS1kZFRoaDptbTpzc1omZ3Q7Cg=="}}),e._v(" "),a("h2",{attrs:{id:"restart-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restart-node"}},[e._v("#")]),e._v(" Restart Node")]),e._v(" "),a("p",[e._v("To restart your node once the new genesis has been updated, use the "),a("code",[e._v("start")]),e._v(" command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXRoZXJtaW50ZCBzdGFydAo="}}),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Learn about how to setup a "),a("RouterLink",{attrs:{to:"/quickstart/validator-setup.html"}},[e._v("validator")]),e._v(" node on Ethermint")],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);