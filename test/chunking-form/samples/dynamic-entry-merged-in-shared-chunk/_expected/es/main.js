import { s as sharedExport } from './generated-shared.js';

import('./generated-shared.js').then(({ dynamicExport }) => console.log(dynamicExport));
import('./generated-other.js');

console.log(sharedExport);
