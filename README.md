# Backbone generator for GS project

A backbone generator for GS project [Yeoman](http://yeoman.io).

## Usage

Install: `npm install -g generator-gs`

Make a new directory and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo gs`, optionally passing an app name:
```
yo gs [app-name]
```

## Generators

Available generators:

- gs:model
- gs:view
- gs:collection

## Typical workflow

```
yo gs # generates your application base and build workflow
yo gs:model user
yo gs:collection user
yo gs:view user
```

## Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
