# Data-Collection-Tree
Data Collection Tree - GreedyGame

Here I am attaching osnapshots of some outputs i got.



1. INSERTING THE DATA 
 ![1](https://user-images.githubusercontent.com/81226978/142612950-b9415506-9d70-4d50-99df-38af5187999e.png)
 
 
 
2. The Database after inserting   --> created 3 schemas -- 
          1. for total requests and timespent 
          2. for maintaining the country wise requests
          3. for maintaining the device type requests

![2](https://user-images.githubusercontent.com/81226978/142613206-d158fd2d-a91d-42b5-b7f0-2e3d9fc997ab.png)
![3](https://user-images.githubusercontent.com/81226978/142613217-0ebc4397-8fc7-42b3-8787-59606f3d968a.png)
![4](https://user-images.githubusercontent.com/81226978/142613226-2a53be8f-c09f-437c-83a3-b964376381c0.png)



3. When a device is inserted the cuntry value gets updated , and if the device already exists then the requests and timespent values get added as well will be updated in the country and total collections
![5](https://user-images.githubusercontent.com/81226978/142613490-7bde9c2f-770d-4b83-b778-8edbaf13d76c.png)
![6](https://user-images.githubusercontent.com/81226978/142613500-831ddc91-8c2e-4251-b107-8d0231c3bf4f.png)



4. To get the Overall total requests made and total timespent we have query -> /overall
![7](https://user-images.githubusercontent.com/81226978/142613700-95de0dca-843c-4e1e-b32b-cfd323c36a09.png)



5. to get number of requests made with devices in particular country we have a query as -> /country (NOTe: req.body has to be passed )
![8](https://user-images.githubusercontent.com/81226978/142613838-48ab2e9f-7987-4c16-b2ac-43e005e1ebc4.png)



6. to get a particular device requests we have query --> /device
![9](https://user-images.githubusercontent.com/81226978/142613956-39cd02e3-d00f-40e8-ab72-dc4f2443a4ba.png)



7. After all these operations are performed you can see the database tree it is updated as the values of webrequests and timmespent are pushed or updated.
![10](https://user-images.githubusercontent.com/81226978/142614104-5c309cb7-3248-4e84-a7e9-7e593e3dd818.png)
![11](https://user-images.githubusercontent.com/81226978/142614125-4f15a448-2814-44ce-ad9b-f71ce37b190d.png)
![12](https://user-images.githubusercontent.com/81226978/142614136-1aeeb770-4e20-40f4-b3f2-b321123b4131.png)





