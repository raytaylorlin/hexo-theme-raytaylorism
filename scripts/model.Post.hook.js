var hookCategory = function(data, next) {
    var categories = data.categories;

    if (!categories) return next();

    var _cats = categories.slice(0);
    var source = data.source.split('/');
    if (source.length > 2) {
        source = source.slice(1, -1);
        source = source.join('/');
        if (_cats.indexOf(source) == -1) _cats.push(source);
    }

    if (!_cats.length) return next();

    var model = hexo.model,
        Category = model('Category'),
        i = 0;

    _cats.forEach(function(name) {
        var nx = name.split('/');
        nx.forEach(function(name, j) {
            var doc = Category.get(name);

            if (!doc) {
                var query = {
                    name: name,
                    parent: j == 0 ? {
                        $exist: false
                    } : categories[i - 1]
                };

                doc = Category.findOne(query);
            }

            if (doc) {
                categories[i] = doc._id;
            } else {
                var data = {
                    name: name
                };

                if (j > 0) {
                    data.parent = categories[i - 1];
                }

                Category.insert(data, function(category) {
                    categories[i] = category._id;
                });
            }
            ++i;
        });
    });

    next();
};

var Post = hexo.model('Post');
Post.schema.pres.save.unshift(hookCategory);
hexo.log.d('support "multiple first-level categories" and "Folder as category"');