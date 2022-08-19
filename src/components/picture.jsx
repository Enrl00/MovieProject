const Picture = ({data}) => {
    return(
        <div style={{
            backgroundImage:`url(${data})`,
            backgroundSize:'contain',
            backgroundRepeat:'no-repeat',
            height:'30vw',
            width:'20vw',
            margin:'5px'
        }}></div>
    )
}
export default Picture;