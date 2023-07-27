import type { TidePageBase } from "@dpc-sdp/ripple-tide-api/types";

export type TideJobSection = {
  title: string;
  content: string;
};

export interface TideJobPage extends TidePageBase {
  /**
   * @description Content section
   */
  sections: TideJobSection[];
  referenceNumber: string;
  boardName: string;
  employmentType: string;
  meetingFrequency: string;
  meetingLength: string;
  location: string;
  industryName: string;
  postDate: string;
  closeDate: string;
}
