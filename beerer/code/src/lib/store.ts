import {create} from 'zustand';
import type {Category,EmergencyIncident} from './data';
interface State {lang:'th'|'en';region:string;province:string;district:string;subdistrict:string;quick:string;category:Category|'';severity:string;query:string;selected:EmergencyIncident|null;layers:Record<string,boolean>;set:(v:Partial<State>)=>void}
export const useDashboard=create<State>((set)=>({lang:'th',region:'',province:'',district:'',subdistrict:'',quick:'all',category:'',severity:'',query:'',selected:null,layers:{flood:true,rescue:true,electrical:true,medical:true,shelter:true,supplies:true,road:true},set}));
