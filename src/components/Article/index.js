import './article-styles.css'

function Article() {
    return (
        <>
            <div className='container'>
                <div className='row col-12 d-flex justify-content-between align-items-center pb-3'>
                    <div className='date-circle'>
                        <span className='d-block'>28</span>
                        <span className='d-block'>06</span>
                    </div>
                    <h3 className='col-11'>Voluptatem accusantium doloremque laudantium, totam rem aperiam </h3>
                </div>
                <div className='row col-12'>
                    <div className='article-image-holder col-3 p-0'>
                        <img className='article-img' src={require('../../images/page2_img1.jpg')} alt='img'/>
                    </div>
                    <div className='col-9 px-4'>
                        <p className='article-preview-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                        <span><a className='article-preview-readmore' href='#'>Read More</a></span>
                    </div>
                </div>
                <hr />
            </div>
        </>
    );
}

export default Article;