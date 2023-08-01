
export default function mortageCapacity(status,child,income){

    if(status === "Single"){
        switch(child){
            case "0" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 1114
                            }else if (income >=21001 && income <=32000){
                                return 1178
                            }else if (income >=32001 && income <=42000){
                                return 1231
                            }else if (income >=42001 && income <= 53000){
                                return 1331
                            }else if (income >=53001 && income <= 64000){
                                return 1493
                            }else if (income >=64001 && income <=85000){
                                return 1711
                            }else if (income >=85001 && income <=106000){
                                return 2012
                            }else if (income >=106001 && income <=127000){
                                return 2233
                            }else if (income >=127001 && income <=148000){
                                return 2647
                            }else if (income >=148001 && income <=169000){
                                return 2735
                            }else if (income >=169001 && income <=212000){
                                return 2970
                            }else if (income >=212001 && income <=265000){
                                return 3415
                            }else if (income >=265001 && income <=318000){
                                return 3967
                            }else if (income >= 318001){
                                return 4164
                            }
                            break;
                        }
            case "1" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 1584
                            }else if (income >=21001 && income <=32000){
                                return 1584
                            }else if (income >=32001 && income <=42000){
                                return 1638
                            }else if (income >=42001 && income <= 53000){
                                return 1739
                            }else if (income >=53001 && income <= 64000){
                                return 1903
                            }else if (income >=64001 && income <=85000){
                                return 2123
                            }else if (income >=85001 && income <=106000){
                                return 2427
                            }else if (income >=106001 && income <=127000){
                                return 2651
                            }else if (income >=127001 && income <=148000){
                                return 3069
                            }else if (income >=148001 && income <=169000){
                                return 3158
                            }else if (income >=169001 && income <=212000){
                                return 3396
                            }else if (income >=212001 && income <=265000){
                                return 3846
                            }else if (income >=265001 && income <=318000){
                                return 4403
                            }else if (income >= 318001){
                                return 4603
                            }
                            break;
                        }
            case "2" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 1958
                            }else if (income >=21001 && income <=32000){
                                return 1958
                            }else if (income >=32001 && income <=42000){
                                return 2011
                            }else if (income >=42001 && income <= 53000){
                                return 2112
                            }else if (income >=53001 && income <= 64000){
                                return 2276
                            }else if (income >=64001 && income <=85000){
                                return 2495
                            }else if (income >=85001 && income <=106000){
                                return 2799
                            }else if (income >=106001 && income <=127000){
                                return 3022
                            }else if (income >=127001 && income <=148000){
                                return 3440
                            }else if (income >=148001 && income <=169000){
                                return 3529
                            }else if (income >=169001 && income <=212000){
                                return 3766
                            }else if (income >=212001 && income <=265000){
                                return 4215
                            }else if (income >=265001 && income <=318000){
                                return 4771
                            }else if (income >= 318001){
                                return 4970
                            }
                            break;
                        }
            case "3" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 2344
                            }else if (income >=21001 && income <=32000){
                                return 2344
                            }else if (income >=32001 && income <=42000){
                                return 2344
                            }else if (income >=42001 && income <= 53000){
                                return 2344
                            }else if (income >=53001 && income <= 64000){
                                return 2604
                            }else if (income >=64001 && income <=85000){
                                return 2819
                            }else if (income >=85001 && income <=106000){
                                return 3117
                            }else if (income >=106001 && income <=127000){
                                return 3337
                            }else if (income >=127001 && income <=148000){
                                return 3746
                            }else if (income >=148001 && income <=169000){
                                return 3834
                            }else if (income >=169001 && income <=212000){
                                return 4067
                            }else if (income >=212001 && income <=265000){
                                return 4508
                            }else if (income >=265001 && income <=318000){
                                return 5054
                            }else if (income >= 318001){
                                return 5249
                            }
                            break;
                        }
            case "4" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 2677
                            }else if (income >=21001 && income <=32000){
                                return 2677
                            }else if (income >=32001 && income <=42000){
                                return 2677
                            }else if (income >=42001 && income <= 53000){
                                return 2773
                            }else if (income >=53001 && income <= 64000){
                                return 2932
                            }else if (income >=64001 && income <=85000){
                                return 3143
                            }else if (income >=85001 && income <=106000){
                                return 3435
                            }else if (income >=106001 && income <=127000){
                                return 3651
                            }else if (income >=127001 && income <=148000){
                                return 4053
                            }else if (income >=148001 && income <=169000){
                                return 4139
                            }else if (income >=169001 && income <=212000){
                                return 4368
                            }else if (income >=212001 && income <=265000){
                                return 4800
                            }else if (income >=265001 && income <=318000){
                                return 5336
                            }else if (income >= 318001){
                                return 5528
                            }
                            break;
                        } 
            case "5" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 3010
                            }else if (income >=21001 && income <=32000){
                                return 3010
                            }else if (income >=32001 && income <=42000){
                                return 3010
                            }else if (income >=42001 && income <= 53000){
                                return 3104
                            }else if (income >=53001 && income <= 64000){
                                return 3259
                            }else if (income >=64001 && income <=85000){
                                return 3467
                            }else if (income >=85001 && income <=106000){
                                return 3754
                            }else if (income >=106001 && income <=127000){
                                return 3965
                            }else if (income >=127001 && income <=148000){
                                return 4360
                            }else if (income >=148001 && income <=169000){
                                return 4444
                            }else if (income >=169001 && income <=212000){
                                return 4668
                            }else if (income >=212001 && income <=265000){
                                return 5093
                            }else if (income >=265001 && income <=318000){
                                return 5619
                            }else if (income >= 318001){
                                return 5807
                            }
                            break;
                        }
            case "6" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 3342
                            }else if (income >=21001 && income <=32000){
                                return 3342
                            }else if (income >=32001 && income <=42000){
                                return 3342
                            }else if (income >=42001 && income <= 53000){
                                return 3435
                            }else if (income >=53001 && income <= 64000){
                                return 3587
                            }else if (income >=64001 && income <=85000){
                                return 3791
                            }else if (income >=85001 && income <=106000){
                                return 4072
                            }else if (income >=106001 && income <=127000){
                                return 4280
                            }else if (income >=127001 && income <=148000){
                                return 4667
                            }else if (income >=148001 && income <=169000){
                                return 4749
                            }else if (income >=169001 && income <=212000){
                                return 4969
                            }else if (income >=212001 && income <=265000){
                                return 5386
                            }else if (income >=265001 && income <=318000){
                                return 5901
                            }else if (income >= 318001){
                                return 6086
                            }
                            break;
                        } 
            case "7" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 3675
                            }else if (income >=21001 && income <=32000){
                                return 3675
                            }else if (income >=32001 && income <=42000){
                                return 3675
                            }else if (income >=42001 && income <= 53000){
                                return 3766
                            }else if (income >=53001 && income <= 64000){
                                return 3915
                            }else if (income >=64001 && income <=85000){
                                return 4115
                            }else if (income >=85001 && income <=106000){
                                return 4391
                            }else if (income >=106001 && income <=127000){
                                return 4594
                            }else if (income >=127001 && income <=148000){
                                return 4973
                            }else if (income >=148001 && income <=169000){
                                return 5054
                            }else if (income >=169001 && income <=212000){
                                return 5270
                            }else if (income >=212001 && income <=265000){
                                return 5678
                            }else if (income >=265001 && income <=318000){
                                return 6184
                            }else if (income >= 318001){
                                return 6365
                            }
                            break;
                        }
            case "8" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 4008
                            }else if (income >=21001 && income <=32000){
                                return 4008
                            }else if (income >=32001 && income <=42000){
                                return 4008
                            }else if (income >=42001 && income <= 53000){
                                return 4097
                            }else if (income >=53001 && income <= 64000){
                                return 4243
                            }else if (income >=64001 && income <=85000){
                                return 4439
                            }else if (income >=85001 && income <=106000){
                                return 4709
                            }else if (income >=106001 && income <=127000){
                                return 4908
                            }else if (income >=127001 && income <=148000){
                                return 5280
                            }else if (income >=148001 && income <=169000){
                                return 5359
                            }else if (income >=169001 && income <=212000){
                                return 5571
                            }else if (income >=212001 && income <=265000){
                                return 5971
                            }else if (income >=265001 && income <=318000){
                                return 6466
                            }else if (income >= 318001){
                                return 6644
                            }
                            break;
                        }
            case "9+" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 4340
                            }else if (income >=21001 && income <=32000){
                                return 4340
                            }else if (income >=32001 && income <=42000){
                                return 4340
                            }else if (income >=42001 && income <= 53000){
                                return 4428
                            }else if (income >=53001 && income <= 64000){
                                return 4571
                            }else if (income >=64001 && income <=85000){
                                return 4763
                            }else if (income >=85001 && income <=106000){
                                return 5028
                            }else if (income >=106001 && income <=127000){
                                return 5223
                            }else if (income >=127001 && income <=148000){
                                return 5587
                            }else if (income >=148001 && income <=169000){
                                return 5665
                            }else if (income >=169001 && income <=212000){
                                return 5871
                            }else if (income >=212001 && income <=265000){
                                return 6263
                            }else if (income >=265001 && income <=318000){
                                return 6749
                            }else if (income >= 318001){
                                return 6922
                            }
                            break;
                        }
            default :   
                        return 0 ;      
        }
    }else if(status === "Couple"){
        switch(child){
            case "0" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 2165
                            }else if (income >=21001 && income <=32000){
                                return 2165
                            }else if (income >=32001 && income <=42000){
                                return 2218
                            }else if (income >=42001 && income <= 53000){
                                return 2317
                            }else if (income >=53001 && income <= 64000){
                                return 2479
                            }else if (income >=64001 && income <=85000){
                                return 2696
                            }else if (income >=85001 && income <=106000){
                                return 2995
                            }else if (income >=106001 && income <=127000){
                                return 3216
                            }else if (income >=127001 && income <=148000){
                                return 3628
                            }else if (income >=148001 && income <=169000){
                                return 3716
                            }else if (income >=169001 && income <=212000){
                                return 3950
                            }else if (income >=212001 && income <=265000){
                                return 4393
                            }else if (income >=265001 && income <=318000){
                                return 4943
                            }else if (income >= 318001){
                                return 5139
                            }
                            break;
                        }
            case "1" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 2532
                            }else if (income >=21001 && income <=32000){
                                return 2532
                            }else if (income >=32001 && income <=42000){
                                return 2532
                            }else if (income >=42001 && income <= 53000){
                                return 2634
                            }else if (income >=53001 && income <= 64000){
                                return 2800
                            }else if (income >=64001 && income <=85000){
                                return 3023
                            }else if (income >=85001 && income <=106000){
                                return 3331
                            }else if (income >=106001 && income <=127000){
                                return 3357
                            }else if (income >=127001 && income <=148000){
                                return 3981
                            }else if (income >=148001 && income <=169000){
                                return 4071
                            }else if (income >=169001 && income <=212000){
                                return 4312
                            }else if (income >=212001 && income <=265000){
                                return 4767
                            }else if (income >=265001 && income <=318000){
                                return 5332
                            }else if (income >= 318001){
                                return 5534
                            }
                            break;
                        }
            case "2" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 2810
                            }else if (income >=21001 && income <=32000){
                                return 2810
                            }else if (income >=32001 && income <=42000){
                                return 2810
                            }else if (income >=42001 && income <= 53000){
                                return 2913
                            }else if (income >=53001 && income <= 64000){
                                return 3081
                            }else if (income >=64001 && income <=85000){
                                return 3306
                            }else if (income >=85001 && income <=106000){
                                return 3616
                            }else if (income >=106001 && income <=127000){
                                return 3845
                            }else if (income >=127001 && income <=148000){
                                return 4272
                            }else if (income >=148001 && income <=169000){
                                return 4363
                            }else if (income >=169001 && income <=212000){
                                return 4606
                            }else if (income >=212001 && income <=265000){
                                return 5066
                            }else if (income >=265001 && income <=318000){
                                return 5635
                            }else if (income >= 318001){
                                return 5839
                            }
                            break;
                        }
            case "3" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 3170
                            }else if (income >=21001 && income <=32000){
                                return 3170
                            }else if (income >=32001 && income <=42000){
                                return 3170
                            }else if (income >=42001 && income <= 53000){
                                return 3170
                            }else if (income >=53001 && income <= 64000){
                                return 3334
                            }else if (income >=64001 && income <=85000){
                                return 3555
                            }else if (income >=85001 && income <=106000){
                                return 3860
                            }else if (income >=106001 && income <=127000){
                                return 4085
                            }else if (income >=127001 && income <=148000){
                                return 4504
                            }else if (income >=148001 && income <=169000){
                                return 4594
                            }else if (income >=169001 && income <=212000){
                                return 4832
                            }else if (income >=212001 && income <=265000){
                                return 5283
                            }else if (income >=265001 && income <=318000){
                                return 5842
                            }else if (income >= 318001){
                                return 6042
                            }
                            break;
                        }
            case "4" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 3426
                            }else if (income >=21001 && income <=32000){
                                return 3426
                            }else if (income >=32001 && income <=42000){
                                return 3426
                            }else if (income >=42001 && income <= 53000){
                                return 3426
                            }else if (income >=53001 && income <= 64000){
                                return 3588
                            }else if (income >=64001 && income <=85000){
                                return 3805
                            }else if (income >=85001 && income <=106000){
                                return 4104
                            }else if (income >=106001 && income <=127000){
                                return 4324
                            }else if (income >=127001 && income <=148000){
                                return 4736
                            }else if (income >=148001 && income <=169000){
                                return 4824
                            }else if (income >=169001 && income <=212000){
                                return 5058
                            }else if (income >=212001 && income <=265000){
                                return 5501
                            }else if (income >=265001 && income <=318000){
                                return 6050
                            }else if (income >= 318001){
                                return 6246
                            }
                            break;
                        } 
            case "5" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 3683
                            }else if (income >=21001 && income <=32000){
                                return 3683
                            }else if (income >=32001 && income <=42000){
                                return 3683
                            }else if (income >=42001 && income <= 53000){
                                return 3683
                            }else if (income >=53001 && income <= 64000){
                                return 3842
                            }else if (income >=64001 && income <=85000){
                                return 4054
                            }else if (income >=85001 && income <=106000){
                                return 4348
                            }else if (income >=106001 && income <=127000){
                                return 4564
                            }else if (income >=127001 && income <=148000){
                                return 4968
                            }else if (income >=148001 && income <=169000){
                                return 5054
                            }else if (income >=169001 && income <=212000){
                                return 5284
                            }else if (income >=212001 && income <=265000){
                                return 5719
                            }else if (income >=265001 && income <=318000){
                                return 6257
                            }else if (income >= 318001){
                                return 6450
                            }
                            break;
                        }
            case "6" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 3940
                            }else if (income >=21001 && income <=32000){
                                return 3940
                            }else if (income >=32001 && income <=42000){
                                return 3940
                            }else if (income >=42001 && income <= 53000){
                                return 3940
                            }else if (income >=53001 && income <= 64000){
                                return 4096
                            }else if (income >=64001 && income <=85000){
                                return 4304
                            }else if (income >=85001 && income <=106000){
                                return 4592
                            }else if (income >=106001 && income <=127000){
                                return 4804
                            }else if (income >=127001 && income <=148000){
                                return 5200
                            }else if (income >=148001 && income <=169000){
                                return 5285
                            }else if (income >=169001 && income <=212000){
                                return 5510
                            }else if (income >=212001 && income <=265000){
                                return 5936
                            }else if (income >=265001 && income <=318000){
                                return 6464
                            }else if (income >= 318001){
                                return 6653
                            }
                            break;
                        } 
            case "7" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 4197
                            }else if (income >=21001 && income <=32000){
                                return 4197
                            }else if (income >=32001 && income <=42000){
                                return 4197
                            }else if (income >=42001 && income <= 53000){
                                return 4197
                            }else if (income >=53001 && income <= 64000){
                                return 4349
                            }else if (income >=64001 && income <=85000){
                                return 4554
                            }else if (income >=85001 && income <=106000){
                                return 4836
                            }else if (income >=106001 && income <=127000){
                                return 5044
                            }else if (income >=127001 && income <=148000){
                                return 5432
                            }else if (income >=148001 && income <=169000){
                                return 5515
                            }else if (income >=169001 && income <=212000){
                                return 5736
                            }else if (income >=212001 && income <=265000){
                                return 6154
                            }else if (income >=265001 && income <=318000){
                                return 6672
                            }else if (income >= 318001){
                                return 6857
                            }
                            break;
                        }
            case "8" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 4453
                            }else if (income >=21001 && income <=32000){
                                return 4453
                            }else if (income >=32001 && income <=42000){
                                return 4453
                            }else if (income >=42001 && income <= 53000){
                                return 4453
                            }else if (income >=53001 && income <= 64000){
                                return 4603
                            }else if (income >=64001 && income <=85000){
                                return 4803
                            }else if (income >=85001 && income <=106000){
                                return 5080
                            }else if (income >=106001 && income <=127000){
                                return 5284
                            }else if (income >=127001 && income <=148000){
                                return 5665
                            }else if (income >=148001 && income <=169000){
                                return 5746
                            }else if (income >=169001 && income <=212000){
                                return 5962
                            }else if (income >=212001 && income <=265000){
                                return 6371
                            }else if (income >=265001 && income <=318000){
                                return 6879
                            }else if (income >= 318001){
                                return 7060
                            }
                            break;
                        }
            case "9+" : 
                        {
                            if(income > 0 && income <= 21000){
                                return 4710
                            }else if (income >=21001 && income <=32000){
                                return 4710
                            }else if (income >=32001 && income <=42000){
                                return 4710
                            }else if (income >=42001 && income <= 53000){
                                return 4710
                            }else if (income >=53001 && income <= 64000){
                                return 4857
                            }else if (income >=64001 && income <=85000){
                                return 5053
                            }else if (income >=85001 && income <=106000){
                                return 5324
                            }else if (income >=106001 && income <=127000){
                                return 5524
                            }else if (income >=127001 && income <=148000){
                                return 5897
                            }else if (income >=148001 && income <=169000){
                                return 5976
                            }else if (income >=169001 && income <=212000){
                                return 6188
                            }else if (income >=212001 && income <=265000){
                                return 6589
                            }else if (income >=265001 && income <=318000){
                                return 7086
                            }else if (income >= 318001){
                                return 7264
                            }
                            break;
                        }
            default : 
                        return 0;
        }
    }
}