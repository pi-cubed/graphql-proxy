import { Neutrino } from 'neutrino';

module.exports = Neutrino()
    .use('.neutrinorc.js')
    .call('eslintrc');
