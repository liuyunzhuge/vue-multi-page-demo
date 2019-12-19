const createPage = (name, title, chunk = '')=>{
    return {
      entry: `src/pages/${name}/main.js`,
      template: 'public/index.html',
      filename: `${name}.html`,
      title,
      chunks: ['chunk-vendors', 'chunk-common', chunk || name]
    }
}

module.exports = {
   pages: {
    index: createPage('index', '首页'),
    about: createPage('about', '关于我们'),
    'some_module': createPage('some/module', '某一个子页面', 'some_module'),
  }
}
