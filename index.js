module.exports = function ({ types: t }) {
    return {
      visitor: {
        ExpressionStatement(path, state) {
          if (t.isCallExpression(path.node.expression)) {
            if (
              t.isMemberExpression(path.node.expression.callee) &&
              t.isIdentifier(path.node.expression.callee.object, { name: 'console' }) &&
              t.isIdentifier(path.node.expression.callee.property)
            ) {
              if (state && state.opts && state.opts.exclude && state.opts.exclude.includes(path.node.expression.callee.property.name)) return
              path.remove()
              return
            }
          }
        }
      }
    }
  }