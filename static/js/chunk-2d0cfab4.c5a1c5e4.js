(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cfab4"],{6565:function(n,e,o){"use strict";o.r(e);var t=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div")},a=[],i={name:"Warning",props:{info:{type:String,default:"false"}},data:function(){return{flag:""}},mounted:function(){this.play()},methods:{play:function(){var n=new SpeechSynthesisUtterance("你有一条消息请注意查收");n.volume=200,n.rate=1,n.pitch=1.5,console.log(n),window.speechSynthesis.speak(n)},close:function(){console.log("触发了吗"),this.$refs.audio.pause()},onPlay:function(){console.log("触发了吗"),this.audio.playing=!0},onPause:function(){console.log("触发了吗"),this.audio.playing=!1}}},s=i,c=o("2877"),l=Object(c["a"])(s,t,a,!1,null,"6ae63389",null);e["default"]=l.exports}}]);