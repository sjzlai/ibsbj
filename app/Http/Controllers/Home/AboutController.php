<?php

namespace App\Http\Controllers\Home;

use App\Http\Model\Company;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class AboutController extends Controller
{
    //
    public function about()
    {
        $company = Company::get();
        return show(1,'产品中心详情信息',$company);
    }
}
