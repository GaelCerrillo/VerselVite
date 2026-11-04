import { injectSpeedInsights } from '@vercel/speed-insights';
injectSpeedInsights();

document.querySelector('#mensaje').textContent = 'JS Test';