import { SdpRplLayer } from '@dpc-sdp/ripple-sdp-projen-config'
const project = new SdpRplLayer({
  name: 'ripple-lib-starter',
  defaultReleaseBranch: 'main',
  addCypress: true,
  addExamples: true,
})
project.synth();
