import createSVGfromTemplate from "../svg-template"

let result = createSVGfromTemplate({
    domain: 'jiuhuaw.web3',
    domainFontSize: 32,
    isNormalized: true,
    isSubdomain: false,
    version: 3,
});
console.log("\ncreate svg of normailized done:\n", result);

result = createSVGfromTemplate({
    domain: 'jiuhuaw.web3',
    domainFontSize: 32,
    isNormalized: false,
    isSubdomain: false,
    version: 3,
});
console.log("\ncreate svg of not normailized done:\n", result);