const getHomePage = (req,res)=> {
    res.send('Home Page');    
};
const getSamplePage = (req,res)=> {
    res.render('sample.ejs')    
};

module.exports = {
    getHomePage,getSamplePage
};