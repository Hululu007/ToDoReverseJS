class Stats
{
    constructor()
    {
        this.stats = {};
    }

    add(str)
    {
        if (typeof str != "string") throw("TypeStats 传入类型有误");

        if (this.stats[str] == undefined) this.stats[str] = 1;
        else this.stats[str]++;
    }

    get(isCount=false)
    {
        if (isCount) return this.stats;
        else return Object.keys(this.stats)
    }
}

export { Stats };