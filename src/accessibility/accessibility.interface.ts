export type IssueSeverity = 'critical' | 'high' | 'medium' | 'low' | 'info';

export interface WCAGGuideline {
  criterion: string;
  level: string;
  title: string;
  description: string;
  reference: string;
}

export interface AccessibilityIssue {
  code: string;
  message: string;
  path: string;
  severity: IssueSeverity;
  context?: Record<string, unknown>;
  suggestion?: string;
  wcagCriterion?: string;
  wcagLevel?: string;
  wcagReference?: string;
}

export interface ImageWithAltText {
  url: string;
  altText?: string;
  isDecorative?: boolean;
  mimeType?: string;
  width?: number;
  height?: number;
}

export interface SemanticContent {
  type: string;
  content?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
  labelledBy?: string;
  ariaDescribedBy?: string;
  level?: number;
  lang?: string;
}

export interface ValidationResult {
  isValid: boolean;
  issues: AccessibilityIssue[];
  summary: Record<IssueSeverity, number>;
}

export interface AccessibilityReport {
  reportId: string;
  url: string;
  tool: string;
  score?: number;
  issues: AccessibilityIssue[];
}
