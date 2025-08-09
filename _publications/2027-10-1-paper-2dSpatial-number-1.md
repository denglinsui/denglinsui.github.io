---
title: "Powerful spatial multiple testing via borrowing neighboring information"
collection: publications
category: manuscripts
permalink: /publication/2027-10-1-paper-2dSpatial-number-1
excerpt: 'We propose 2d-SMT, a multiple testing method that leverages spatial information via an auxiliary statistic to improve FDR control and power for spatial signals. 2d-SMT integrates with weighted BH procedures, offers fast optimization, and shows superior FDR-power performance in theory and simulations.'
date: 2027-10-01
venue: 'Statistica Sinica'
paperurl: 'https://www3.stat.sinica.edu.tw/ss_newpaper/SS-2024-0152_na.pdf'
reproduceurl: 'https://github.com/denglinsui/2dSMT-manuscript-sourcecode'
softwareurl: 'https://github.com/denglinsui/TwoDSMT'
---

Clustered effects are often encountered in multiple hypothesis testing of spatial signals. In this paper, we propose a new method, termed two-dimensional spatial multiple testing (2d-SMT) procedure, to control the false discovery rate (FDR) and improve the detection power by exploiting the spatial information encoded in neighboring observations. The proposed method provides a novel perspective of utilizing spatial information by gathering signal patterns and spatial dependence into an auxiliary statistic. 2d-SMT rejects the null when a primary statistic at the location of interest and the auxiliary statistic constructed based on nearby observations are greater than their corresponding cutoffs. 2d-SMT can also be combined with different variants of the weighted BH procedures to improve the detection power further. A fast algorithm is developed to accelerate the search for optimal cutoffs in 2d-SMT. In theory, we establish the asymptotic FDR control of 2d-SMT under weak spatial dependence. Extensive numerical experiments demonstrate that the 2d-SMT method combined with various weighted BH procedures achieves the most competitive performance in FDR and power trade-off.
