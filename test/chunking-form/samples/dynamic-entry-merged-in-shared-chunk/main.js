import('./dynamic.js').then(({ dynamicExport }) => console.log(dynamicExport));
import('./other.js');
import { sharedExport } from './shared.js';

console.log(sharedExport);
