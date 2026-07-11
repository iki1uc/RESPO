function GHOST_SCAN_REAL(r){
    if(r.MISS === true){
        return {
            ...r,
            ERROR: true,
            RESULT: "MISS",
            WAHRHEIT: false
        };
    }

    const result = (r.STATUS === "REAL") ? r.IST : r.NEU;

    return {
        ...r,
        RESULT: result,
        WAHRHEIT: (result === r.IST),
        ERROR: false
    };
}

function RAUM_KERNEL(raum){
    const ID = {
        ZUG: raum.ZUG,
        BLATT: raum.BLATT,
        STATUS: raum.STATUS,
        LEGO: raum.LEGO,
        TETRIZ: raum.TETRIZ,
        ARG: raum.ARG
    };

    const DATE = {
        IST: raum.IST,
        SOLL: raum.SOLL,
        NEU: raum.NEU,
        IST2: raum.IST2,
        SOLL2: raum.SOLL2
    };

    raum.RESULT = (raum.STATUS === "REAL") ? raum.IST : raum.NEU;

    return { ID, DATE, ...raum };
}

function MOVE(raum){
    if(raum.STATUS === "REAL") return raum.IST;
    if(raum.STATUS === "TMP") return raum.NEU;
    return null;
}

function TOOLOMAT_DOM(dom){
    const TAGS = dom.TAGS;
    const DEPTH = dom.DEPTH;

    const Φ = TAGS;
    const φ = TAGS * DEPTH;
    const φ2 = DEPTH * DEPTH;
    const φ∞ = TAGS * DEPTH * 6;

    const MASS = φ;

    return {
        Φ,
        φ,
        φ2,
        φ∞,
        MASS,
        M5: [Φ, φ, φ2, φ∞, MASS]
    };
}

console.log("MROR Kernel geladen.");
