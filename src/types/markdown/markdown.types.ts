export interface ContentSection {
  title: string;
  paragraphs: string[];
}

export interface ContentPosition {
  position: {
    end: {
      line: number;
      column: number;
      offset: number;
    };
    start: {
      line: number;
      column: number;
      offset: number;
    };
  };
}

export interface ContentObjBase extends ContentPosition {}

export interface Root extends ContentObjBase {
  type: "root";
  children: ContentObj[];
}

export interface Heading extends ContentObjBase {
  type: "heading";
  value: string;
  children: Text[];
}

export interface Paragraph extends ContentObjBase {
  type: "paragraph";
  children: Text[];
}

export interface Text extends ContentObjBase {
  type: "text";
  value: string;
}

export interface ThematicBreak extends ContentObjBase {
  type: "thematicBreak";
}

export interface UnorderedList extends ContentObjBase {
  type: "list";
  ordered: boolean;
  spread: boolean;
  children: ContentObj[];
}

export type ContentWithValue = Heading | Paragraph;
export type ContentObj =
  | Root
  | Heading
  | UnorderedList
  | Paragraph
  | ThematicBreak;
