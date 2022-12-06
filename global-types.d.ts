
type ButtonProps = {
    title: string;
    className: string;
    function?: (a) => void;
    content?: React.ReactNode;
}

type NavbarProps = {
    title: string;
    contacts: Contacts[];
    content: string[];
}

type InputProps = {
    placeholder?: string;

    on_change: (a) => void;
}

type ProductCardProps = {
    name: string;
    svg: string;
    description: string;
}

interface Contacts {
    contact: string,
    href: string
}

type CardRenderProps = {
    item: {name:string, desc: string, img:string, seller: string, price: number};
    index: number;
}