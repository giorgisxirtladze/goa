const firstBefore2000 = technologies.find(tech => tech.releaseYear < 2000);
const lastUsedInWebDev = technologies.findLast(tech => tech.usedInWebDev === true);

console.log(firstBefore2000);
console.log(lastUsedInWebDev);
