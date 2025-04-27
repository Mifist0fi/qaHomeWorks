xpath
1. 
//button[@aria-label="Open menu"]
2.
//*[@data-testid="level1-navigation-container"]//nav
3.
(//*[@data-testid="dundee-card"]//*[@data-testid="card-metadata-lastupdated"])[1]
4.
//div[@data-testid="westminster-card"]//div[@data-testid="card-media-wrapper"]

6.
(//*[@data-testid="manchester-card"]//*[@data-testid="card-metadata-lastupdated"])[1]
7. 
(//*[@data-testid="manchester-card"])[4]

CSS
1.
[aria-label="Open menu"]
2.
[data-testid*="navigation-container"] nav
3.
[data-testid="first-grid"] [data-testid="dundee-card"]:nth-child(1) [data-testid="card-metadata-lastupdated"]
4.
[data-testid="westminster-card"] img
6.
[data-testid="second-grid"] [data-testid="manchester-card"]:nth-child(1) [data-testid="card-metadata-lastupdated"] 
7.
[data-testid="second-grid"] [data-testid="manchester-card"]:nth-of-type(4)