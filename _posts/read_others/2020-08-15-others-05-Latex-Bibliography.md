---
title: "「Others」5 Latex Bibliography"
subtitle: "Latex Bibliography - BibTeX"
layout: post
author: "Linsui"
header-style: text
hidden: true
tags:
  - Latex
  - Others

---

# Latex Bibliography

记录一下在LaTeX中引用参考文献的方法。

## 方法一

在一些引用工作比较少的情况下，一个比较简单的方法是直接在最后加入代码：

```tex
\begin{thebibliography}{99}  
	\bibitem{author1}author1, author2...
\end{thebibliography}
```

之后再用`\cite{}`来引用。

## 方法二

在引用量较多，并且需要根据不同的需要更改模式的情况下，利用BibTeX来帮助管理文献。

- 在Google Scholar或者其他网站上获取bib格式/endnote格式的引用数据；

- 创建`.bib`后缀文件来存储参考文献，将获取的文献数据加入其中，如`mybibtex.bib`；

- 最后在文件结束前加入

  ```tex
  \bibliographystyle{plain}
  \bibliography{mybibtex} 
  ```

*Note*：这里的`plain`指的是参考文献呈现的格式，如果对应需要得到符合某期刊的参考文献格式，需要得到对应的`bst`文件，并采用这种格式。

# References

- https://www.cnblogs.com/parrynee/archive/2010/03/02/1676369.html
- https://www.overleaf.com/learn/latex/Bibliography_management_with_natbib