"use strict";

//import only the things that you need 
import Beer from './Beer.js';
import $ from 'jquery';
import _template from '../node_modules/lodash/template.js';
import _each from '../node_modules/lodash/each.js';

$(function() {
    let $body = $('body');
    let beers = [];
    let summary = _template('<p><%= summary %></p>');

    beers.push(new Beer('Schlafly Oktoberfest', 'ale', 40, 6.2));
    beers.push(new Beer('Odell Runoff Red IPA', 'ale', 50, 6.5));
    beers.push(new Beer('North Coast Scrimshaw', 'lager', 22, 4.7));

    _each(beers, (beer) => {
        let $par = $(summary({summary: beer.getSummary()}));
        $body.append($par);
    });
});
