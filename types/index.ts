export type TCountry = {
    name            : string,
    altSpellings    : string[],
    callingCodes    : string[],
    capital         : string,
    subregion       : string,
    region          : string,
    population      : number,
    latlng          : number[],
    area            : number,
    timezones       : string[],
    borders         : string[],
    flags           : TFlag,
    currencies      : TCurrency[],
    languages       : TLanguage[],
    independent     : boolean,
}

export type TFlag = {
    svg : string,
    png : string,
}

export type TCurrency = {
    code    : string,
    name    : string,
    symbol  : string,
}

export type TLanguage = {
    name        : string,
    nativeName  : string,
}