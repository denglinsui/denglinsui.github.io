---
title: "Structure-adaptive canonical correlation analysis for microbiome multi-omics data"
collection: publications
category: manuscripts
permalink: /publication/2024-11-20-paper-SACCA-number-5
excerpt: 'We introduce a new sCCA framework for integrating microbiome and other high-dimensional omics data, explicitly accounting for the compositional nature of microbiome data. Our method incorporates prior structural information among taxa via adaptive penalization, improving accuracy when structure is informative and remaining robust to misspecification. Extensive simulations and real data analyses show that this approach outperforms existing methods.'
date: 2024-11-20
venue: 'Frontiers in Genetics'
paperurl: 'https://www.frontiersin.org/journals/genetics/articles/10.3389/fgene.2024.1489694/full'
---

Sparse canonical correlation analysis (sCCA) has been a useful approach for integrating different high-dimensional datasets by finding a subset of correlated features that explain the most correlation in the data. In the context of microbiome studies, investigators are always interested in knowing how the microbiome interacts with the host at different molecular levels such as genome, methylol, transcriptome, metabolome and proteome. sCCA provides a simple approach for exploiting the correlation structure among multiple omics data and finding a set of correlated omics features, which could contribute to understanding the host-microbiome interaction. However, existing sCCA methods do not address compositionality, and its application to microbiome data is thus not optimal. This paper proposes a new sCCA framework for integrating microbiome data with other high-dimensional omics data, accounting for the compositional nature of microbiome sequencing data. It also allows integrating prior structure information such as the grouping structure among bacterial taxa by imposing a “soft” constraint on the coefficients through varying penalization strength. As a result, the method provides significant improvement when the structure is informative while maintaining robustness against a misspecified structure. Through extensive simulation studies and real data analysis, we demonstrate the superiority of the proposed framework over the state-of-the-art approaches.
