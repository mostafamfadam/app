Ich habe die Struktur als Clean denn Sie können einfach das Projekt lesen und wenn ich mit einem team arbeite, kann jeder den Kode verstehen.
und Ich habe dieses Projekt mit 3 Options:
1- es ist bei @NGRX-Store:
 applicantByEntity -> components -> bewerber
                                 -> neu-bewerber
                     -> store -> actions
                               -> reducers
                               -> models

2- es it bei @NGRX-Enity:
 applicantByStore -> components ->  applicants
                                -> new-applicant
                     -> store -> actions
                               -> reducers
                               ->models
3- es ist mit Service aber ohne NGRX
applicantByService