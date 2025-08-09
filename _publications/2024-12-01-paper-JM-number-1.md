---
title: "Joint mirror procedure: Controlling false discovery rate for identifying simultaneous signals"
collection: publications
category: manuscripts
permalink: /publication/2024-12-01-paper-JM-number-1
excerpt: 'We present the joint mirror (JM) procedure for detecting features with joint statistical significance while controlling the false discovery rate (FDR) in finite samples. JM iteratively shrinks the rejection region based on updated information until the estimated false discovery proportion meets the target FDR. We further introduce the composite FDR (cFDR), which weights false discoveries by their number of null components, and prove JM’s control of cFDR using a leave-one-out technique. Our efficient algorithm accommodates partial ordering and, through simulations and real applications, demonstrates robust FDR control and improved power.'
date: 2024-12-01
venue: 'Biometrics'
slidesurl: 'http://denglinsui.github.io/files/SlidesJMirror.pdf'
paperurl: 'https://academic.oup.com/biometrics/article/80/4/ujae142/7923040'
reproduceurl: 'https://github.com/denglinsui/JMirror_Experiment'
softwareurl: 'https://github.com/denglinsui/JMirror'
---
In many applications, the process of identifying a specific feature of interest often involves testing multiple hypotheses for their joint statistical significance. Examples include mediation analysis, which simultaneously examines the existence of the exposure-mediator and the mediator-outcome effects, and replicability analysis, aiming to identify simultaneous signals that exhibit statistical significance across multiple independent studies. In this work, we present a new approach called the joint mirror (JM) procedure that effectively detects such features while maintaining false discovery rate (FDR) control in finite samples. The JM procedure employs an iterative method that gradually shrinks the rejection region based on progressively revealed information until a conservative estimate of the false discovery proportion is below the target FDR level. Additionally, we introduce a more stringent error measure known as the composite FDR (cFDR), which assigns weights to each false discovery based on its number of null components. We use the leave-one-out technique to prove that the JM procedure controls the cFDR in finite samples. To implement the JM procedure, we propose an efficient algorithm that can incorporate partial ordering information. Through extensive simulations, we show that our procedure effectively controls the cFDR and enhances statistical power across various scenarios, including the case that test statistics are dependent across the features. Finally, we showcase the utility of our method by applying it to real-world mediation and replicability analyses.
