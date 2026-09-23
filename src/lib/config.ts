/** 배경 스타일: light | dark */
export type BgStyle = 'light' | 'dark';

export const siteConfig = {
  title: process.env.NEXT_PUBLIC_TITLE || '엑셀 취합기',
  subtitle:
    process.env.NEXT_PUBLIC_SUBTITLE ||
    '매달 부서별로 받는 엑셀 파일, 하나로 합쳐서 바로 내려받으세요.',
  badge: process.env.NEXT_PUBLIC_BADGE || '업로드 없이 브라우저에서',
  guideHeading: process.env.NEXT_PUBLIC_GUIDE_HEADING || '쓰는 방법',
  stepOne:
    process.env.NEXT_PUBLIC_STEP_ONE ||
    '받은 엑셀 파일을 전부 끌어다 놓습니다.',
  stepTwo:
    process.env.NEXT_PUBLIC_STEP_TWO ||
    '행 수와 열이 맞는지 미리보기로 확인합니다.',
  stepThree:
    process.env.NEXT_PUBLIC_STEP_THREE ||
    '엑셀로 내려받아 그대로 보고에 씁니다.',
  footerNote:
    process.env.NEXT_PUBLIC_FOOTER_NOTE ||
    '이 도구는 파일을 서버로 보내지 않습니다. 모든 처리는 이 브라우저 안에서 끝납니다.',
  accent: process.env.NEXT_PUBLIC_ACCENT || '#0f766e',
  bgStyle: (process.env.NEXT_PUBLIC_BG_STYLE || 'light') as BgStyle,
  fileNameColumn: process.env.NEXT_PUBLIC_FILENAME_COLUMN || '출처파일',
  downloadName: process.env.NEXT_PUBLIC_DOWNLOAD_NAME || '취합결과',
  headerRow: 1,
  autoHeader: true,
  allSheets: false,
  mergeSimilar: true,
  coerceNumbers: true,
  gaId: process.env.NEXT_PUBLIC_GA_ID || null,
};

export type SiteConfig = typeof siteConfig;
