import {
  tidePageBaseMapping,
  tidePageBaseIncludes,
} from "@dpc-sdp/ripple-tide-api";
import type { RplTideMapping } from "@dpc-sdp/ripple-tide-api/types";

const tideJobModule: RplTideMapping = {
  mapping: {
    ...tidePageBaseMapping({
      withSidebarContacts: true,
      withSidebarRelatedLinks: true,
      withSidebarSocialShare: true,
    }),
  },
  includes: [
    ...tidePageBaseIncludes({
      withSidebarContacts: true,
      withSidebarRelatedLinks: true,
      withSidebarSocialShare: true,
    }),
    // 'field_documents.field_media_file',
    // 'field_contact.field_paragraph_phones',
    // 'field_related_links',
    // 'field_landing_page_c_secondary.field_block_image.field_media_image',
    // 'field_landing_page_c_secondary.field_block_embedded_video',
    // 'field_search_duration',
    // 'field_search_remuneration',
    // 'field_search_industry'
  ],
};

export default tideJobModule;
