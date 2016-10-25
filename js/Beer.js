'use strict';

import _template from '../node_modules/lodash/template.js';
let summary = _template("<%= name %> is an <%= family %> with <%= IBU %> IBUs and <%= alcohol %>% alcohol.");

export default class Beer {
    constructor(name, family, IBU, alcohol) {
        _validateFamily(family);
        this._name = name;
        this._family = family;
        this._IBU = IBU;
        this._alcohol = alcohol;

        /**
         * @private
         *
         * Validate the beer family.
         * @param family
         */
        function _validateFamily(family) {
            if(family !== 'ale' && family !== 'lager')
                throw Error("Family must be either an ale or a lager");
        }
    }

    /**
     * Determines if Beer is an ale.
     * @returns {boolean}
     */
    isAle() {
        return this.family.toLowerCase() === 'ale';
    }

    /**
     * Determines is Beer is a lager.
     * @returns {boolean}
     */
    isLager() {
        return this.family.toLowerCase() === 'lager';
    }

    /**
     * Returns a summary of the beer.
     * @returns {String} the summary
     */
    getSummary() {
        return summary({
            name: this._name,
            family: this._family,
            IBU: this._IBU,
            alcohol: this._alcohol
        });
    }
}
