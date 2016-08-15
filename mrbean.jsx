class MrBear extends React.Component{
    
constructor(props) {
    super(props)
    this.state = {
        imageUrls: []
    };
}

componentDidMount() {
    var self = this;
    this.props.items.map((item) => {
        ImageStore.getImageById(item.imageId).then(image => {
            var mapping = {id: item.imageId, url: image.url};
            var newUrls = self.state.imageUrls.slice().push(mapping)
            self.setState({
                imageUrls: newUrls
            });
        })
    });
}

render() {
    return (<div>
        this.state.imageUrls.forEach(mapping => {
            <div>id: {mapping.id}, url: {mapping.url}`</div>
        })
        </div>
    );
}

}

ReactDOM.render(<MrBean />, document.querySelector('.bean'))