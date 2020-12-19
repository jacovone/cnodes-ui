# TO-DO

## Importing a program into the _canvas_

- To improve the process of import, we can be insert weak references into the program components that point to graphic elements
- CNODES must include a section **meta** in the cnode structure, also in export and import
- CONED-UI must assign to the **meta** structure graphical behavior like positions
  - The structure will compare under the node definition

## Simplifing the code

| Problem                        | Solution                                           |
| ------------------------------ | -------------------------------------------------- |
| There are **too many** classes | **collapse** base classes that are general purpose |

## BUGS

- ~~It seems that by disconnecting a node, the input value remains connected~~
- ~~Enable the source map features to debug the code~~
- try to implement a clear dump, at least for connections
