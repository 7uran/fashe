export interface CategoryCardProps {
    img: string;
    type: string;
    isSmall?: boolean;
}

export interface ItemCardProps {
    img: string;
    title: string;
    price: number;
    label: string;
    id: any;
}


export interface Post {
    mainImage: string;
    title: string;
    price: number;
    type: string;
}

export interface BlogCardProps {
    img: string;
    title: string;
    content: string;
}

export interface SocialMediaCardProps {
    img: string;
}

export interface BlogPageCardProps {
    img: string;
    title: string;
    content: string;
    date: string;
    slug: string;
}

export interface BlogPost {
    img: string;
    title: string;
    date: string;
    content: string;
    slug: string;
}
