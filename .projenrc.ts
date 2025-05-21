import { SdpRplLayer } from '@dpc-sdp/ripple-sdp-projen-config'

const project = new SdpRplLayer({
  name: 'ripple-lib-starter',
  siteProjectName: 'reference-sdp-vic-gov-au',
  defaultReleaseBranch: 'main',
  addCypress: true,
  addExamples: true
})

project.synth();
