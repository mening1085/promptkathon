export interface GeographicArea {pro_code:string;pro_en:string;pro_th:string;amp_code:string;amp_en:string;amp_th:string;tam_code?:string;tam_en?:string;tam_th?:string}
export interface GeographicIndex {districts:GeographicArea[];subdistricts:GeographicArea[];provinces:Record<string,string>}
export async function getGeography():Promise<GeographicIndex>{const r=await fetch('/data/geography-index.json');if(!r.ok)throw new Error('Boundary index unavailable');return r.json()}
