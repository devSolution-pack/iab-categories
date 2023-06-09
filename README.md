# iab-categories
List of IBA categories with code

### Description
IAB categories are standard classifications that publishers and brands use to categorise web content and, therefore, improve targeting.\
Based on the IAB Tech Lab Content Taxonomy, the categories are defined under two tiers. Tier 1 encompasses broader categories such as Arts & Entertainment and Health & Fitness, and Tier 2 defines these even further, covering more specific ‘subcategories’ such as Television and Nutrition, enabling more precise targeting or exclusions. The same content can be classified under multiple IAB categories.

### How to use 
in the package there is 4 function
```ecmascript 6
getAllCategories() // return all the categories 
getAllCategoriesIds() // return all the categories parents ID
getAllCategoriesNames() // return all the categories parents names

```
```ecmascript 6
findCategoryById("IAB1") // return all the categories children object
```
```ecmascript 6
{
    id: "IAB1"
    name: "Arts & Entertainment"
    chilled: Array(7)
}
```
### Issues
please open issue in GitHub repo to fix it [URL](https://github.com/devSolution-pack/iab-categories/issues)

### Note 
the package worked with `typescript` and `javascript`

created by [Eliassallom](https://github.com/EliasSalom)

