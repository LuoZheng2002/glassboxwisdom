
type Prop={
    children: any[] | JSX.Element;
}

export const Navbar = ({children}: Prop)=>{
    return (
        <div style={{backgroundColor: "lightGray", padding: "5px 5px 5px 20px"}}>
            {children}
        </div>
    )
}