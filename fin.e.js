export function loadRespo(module){
    return fetch(`./${module}.json`).then(r => r.json());
}

export function GHOST_SCAN_REAL(data){
    return {
        scan: "ok",
        octa: data.octa_core2 || false,
        whirl: data.whirl || false,
        quadrant: data.quadrant || false,
        selfE: data.selfE || false
    };
}
