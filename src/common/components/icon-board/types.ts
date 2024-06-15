export class IconBoardItem {
  name: string;
  avatar: string;

  constructor(name: string, avatar: string) {
    this.name = name;
    this.avatar = avatar;
  }
}

export interface IconBoardProps {
  boardItems: IconBoardItem[];
}
