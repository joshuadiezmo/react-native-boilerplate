module.exports = {
  root: true,
  extends: '@react-native-community',
  rules:{
    'react/prop-types': 2,
    "sort-imports": [2, {
      "ignoreCase": true,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }]
  }
};
