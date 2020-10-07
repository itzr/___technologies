# The Basic Idea
- What are the user benefits /  Value to the end users?
- What are the core components?
- UI: Overview/Information on the core components?
    - Define sub-features and anything that may not be immediately obvious.
    - **Low-fidelity mock ups: Can just be shapes, so long as the idea is outlined**
- API: What are the endpoints, what do they look like?
- Extra top level requirements, e.g. Cache?
- Success metrics?
# Process
- Are we using JIRA?
-> todo -> in prog -> peer test -> peer code review -> qa test -> passed testing -> done ... then deploy
- Who is code reviewing? Who is testing?
- What's the strategy for merging to master / tracking ids in branchs and commiting? 
# Concurrency (Activity Diagrams) 
- What can happen at the same time?
- What must happen at the same time?
*An activity diagram consists of a set of actions drawn as rounded boxes.
The arrow leaving an acction leads to either another action (which
can start once the first action completes) or to a thick line called
a synchronization bar. Once all the actions leading into a syncronisation bar 
are complete, you can then proceed along any arrows leaving the var.
An action with no arrows leading into it can be started at any time.
 
# EPIC BREAKDOWNb 
1. Fixed number features in Sprint job
2. Fixed dateline per Sprint
3. Fixed number of main tasks Sprint. Create more sub-tasks.
4. More information per task (but we stil need information about Sprint) EG: title, content, file Design, api doc, who is responsible.
