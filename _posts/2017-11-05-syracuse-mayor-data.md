---
layout: post
title: "Syracuse Mayoral Polls and Finance Data"
date: 2017-11-05
---

The City of Syracuse will elect its next mayor this Tuesday. There have been two polls and campaign financial reporting data released over the last few weeks. 
* [First poll](http://www.syracuse.com/politics/index.ssf/2017/10/syracusecom_poll_whos_ahead_in_historic_syracuse_mayors_race.html)
* [Second poll](http://www.syracuse.com/politics/index.ssf/2017/10/syracusecom_poll_whos_ahead_in_historic_syracuse_mayors_race.html)
* [Campaign finance data](https://www.elections.ny.gov/CFViewReports.html)

Syracuse.com has done a good job reporting on the race, and on the polls and campaign finance data. I decided to look at it as well - one note is that all the data is published as PDF. I had to convert it to a CSV which is time consuming. Part of my job as Chief Data Officer is to try and make the City's data more consumable and make it easier to analyze. CSV is good for this, PDF is not. It would be awesome if polling and campaign finance data was published as a CSV - for these purposes, I've saved the data as a CSV.
* [Polling data](http://samedelstein.com/assets/MayoralElection/mayorPoll.csv)
* [Campaign finance data](http://samedelstein.com/assets/MayoralElection/campaignfinance.csv)

Two notes:
* I am just presenting some visualizations about what I've seen in the data. This is not supposed to be presented with any bias toward one candidate. Some of the visualizations focus more on Ben Walsh and Juanita Perez Williams because they are currently leading in the polls.
* Click on the charts to open a new window so you can see a larger version.

For the polling data, I looked at the changes from the first to second poll. Then for the campaign finance data, I looked at where the money came from. The month-to-month polling data is an interesting way to see how support changes as the race comes closer to an end. This race will likely be close, and it is also likely that no candidate will get a majority of the votes, so any potential gain seems important.

Looking at who the polling shows is favored to win the race, the numbers have changed from October to November. Ben Walsh has taken a lead, though the lead is within the margin of error. 

<a href = "http://samedelstein.com/assets/MayoralElection/ElectionPreference.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/ElectionPreference.jpg" width="100%">
</a>

Amongst both liberals and independents there has been a shift of support in the last month for both Walsh and Perez Williams. Walsh has gained with liberals, Perez Williams with independents.

<a href = "http://samedelstein.com/assets/MayoralElection/Walshplot.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/Walshplot.jpg" width="100%">
</a>

There are still a lot of voters who could change votes. Lavine's support has dropped in the past month, and while many of her supporters have grown more confident that they will vote for her, a fair number also say they are thinking of switching - opening an opoortunity for one of the two leading candidates to pick up much needed support.

<a href = "http://samedelstein.com/assets/MayoralElection/LavineChangeplot.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/LavineChangeplot.jpg" width="100%">
</a>

At the same time, looking at what matters most when considering a vote for Lavine, her supporters say sticking to voting on party lines is important - suggesting that Republicans will vote Republican in this race, no matter the candidate.

<a href = "http://samedelstein.com/assets/MayoralElection/Candidateplot.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/Candidateplot.jpg" width="100%">
</a>

Knowing that there has been a change in who is leading in the polling, we should look at the favorability for each candidate. All candidates are more well known in November than they were October. Perez Williams' unfavorability rating has grown in the last month, Lavine's favorable and unfavorable numbers have both risen, Nicoletti - though he is no longer running - has seen his favorability rise, and Walsh's favorability has risen, as has Hawkins'.
 
<a href = "http://samedelstein.com/assets/MayoralElection/FavorableChart.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/FavorableChart.jpg" width="100%">
</a>

Joe Nicoletti dropped out of the race after the primary, but since then, his favorability has risen across all demographic groups surveyed.

<a href = "http://samedelstein.com/assets/MayoralElection/NicolettiFavorableplot.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/NicolettiFavorableplot.jpg" width="100%">
</a>

Perez Williams' favorability has changed since last month, as have her overall polling numbers. She lost a lot of favorability amongst union members, but gained favorability from Lavine supporters.

<a href = "http://samedelstein.com/assets/MayoralElection/RepLavineYesplot.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/RepLavineYesplot.jpg" width="100%">
</a>

Walsh's favorability has increased from supporters of all the other candidates - his overall favorbility also grew by more than 10 points.

<a href = "http://samedelstein.com/assets/MayoralElection/Walshplot.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/Walshplot.jpg" width="100%">
</a>

There have been a lot of issues talked about during the campaign. Crime and safety has become a bigger issue in the past month, while public school performance has become less of an issue in the campaign - Lavine's key issue.

<a href = "http://samedelstein.com/assets/MayoralElection/importantIssue.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/importantIssue.jpg" width="100%">
</a> 

One of the questions was about the direction of New York State. Both Walsh and Nicoletti's supporters had strong views on this question. 

<a href = "http://samedelstein.com/assets/MayoralElection/Walshsupportersfirstplot.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/Walshsupportersfirstplot.jpg" width="100%">
</a>

Interestingly, for the question about if the City of Syracuse is on the right track, Lavine's supporters are the ones who changed most in the past month. Though they still feel like the City is going in the wrong direction, that attitude has dropped significantly since October.

<a href = "http://samedelstein.com/assets/MayoralElection/Lavinesupporterssecondplot.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/Lavinesupporterssecondplot.jpg" width="100%">
</a>

For the campaign finance data, I looked at Walsh and Perez Williams' campaign contributions. I only looked at individual contributions over $100. Because the data was in PDF, there is a potential that in the conversion, some errors could have been made. I did my best to check for problems - publishing as CSV would have eliminated this concern - just saying...

Donations to the candidates come from all over the country. Both candidated receive the majority of their dollars from out of Syracuse, though Perez Williams gets more dollars from out of Syracuse.

<a href = "http://samedelstein.com/assets/MayoralElection/inSyracusePlot.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/inSyracusePlot.jpg " width="100%">
</a>

Perez Williams is from California. Many of her donations come from there, as well. This map shows which states contribute the most dollars to Perez Williams - California after New York.

<a href = "http://samedelstein.com/assets/MayoralElection/JuanitaStatePlot.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/JuanitaStatePlot.jpg " width="100%">
</a>

<a href = "http://samedelstein.com/assets/MayoralElection/JuanitaPercentageState.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/JuanitaPercentageState.jpg " width="100%">
</a>

Walsh gets significant dollars from Florida and around DC, again after New York.

<a href = "http://samedelstein.com/assets/MayoralElection/BenStatePlot.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/BenStatePlot.jpg " width="100%">
</a>

<a href = "http://samedelstein.com/assets/MayoralElection/BenPercentageState.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/BenPercentageState.jpg " width="100%">
</a>

Looking at where donations are made by city, first for Perez Williams, both nationwide and then in New York.

<a href = "http://samedelstein.com/assets/MayoralElection/JuanitaCityPlot.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/JuanitaCityPlot.jpg " width="100%">
</a>

<a href = "http://samedelstein.com/assets/MayoralElection/NYJuanita.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/NYJuanita.jpg " width="100%">
</a>

For Walsh, his nationwide map followed by just New York.

<a href = "http://samedelstein.com/assets/MayoralElection/BenCityPlot.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/BenCityPlot.jpg " width="100%">
</a>

<a href = "http://samedelstein.com/assets/MayoralElection/NYBen.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/NYBen.jpg " width="100%">
</a>

Looking at count of donations by week, we see some spikes by both candidates over the past year.

<a href = "http://samedelstein.com/assets/MayoralElection/CountDonationsByWeek.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/CountDonationsByWeek.jpg " width="100%">
</a>

Walsh, however, has had some weeks with very large donation totals.

<a href = "http://samedelstein.com/assets/MayoralElection/SumDonationsByWeek.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/SumDonationsByWeek.jpg " width="100%">
</a>

Finally, I looked at the count and sum of donations by week by candidate, and if the donations were from within Syracuse. 

<a href = "http://samedelstein.com/assets/MayoralElection/CountDonationsCandidate.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/CountDonationsCandidate.jpg " width="100%">
</a>

<a href = "http://samedelstein.com/assets/MayoralElection/SumDonationsCandidate.jpg" target="_blank">
<img class="img-fluid" src="http://samedelstein.com/assets/MayoralElection/SumDonationsCandidate.jpg " width="100%">
</a> 

There is a lot in all of this data - and I've only scratched the surface. I hope it helps contextualize some of the numbers. The election is on Tuesday and it looks to be close, so get out and vote!








