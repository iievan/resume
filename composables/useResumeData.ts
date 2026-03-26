import type { ResumeData } from '~/types/resume'
import resumeContent from '~/content/resume-content.json'

export const useResumeData = (): ResumeData => {
  return resumeContent as ResumeData
}
