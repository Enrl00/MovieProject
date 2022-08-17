const Picture = ({data}) => {
    return(
        <div style={{
            backgroundImage:`url(${data})`,
            height:'30vw',
            width:'25vw'
        }}></div>
    )
}
export default Picture;