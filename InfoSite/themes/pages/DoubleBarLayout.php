<?php
class DoubleBarLayout implements PageLayout {

	public function fetchPagedLinks($parent, $queryVars) {

		$currentPage = $parent->getPageNumber();
		$str = "<div class='nav'>";



		//write statement that handles the previous and next phases
	   	//if it is not the first page then write previous to the screen
		if(!$parent->isFirstPage()) {
			$previousPage = $currentPage - 1;
			$str .= "<a href=\"?page=$previousPage$queryVars\">&lt; previous</a> ";
		}
		if(!$parent->isFirstPage()) {
			if($currentPage != 1 && $currentPage != 2 && $currentPage != 3) {
					$str .= "<a href='?page=1$queryVars' title='Start'>First</a> ";
			}
		}

		for($i = $currentPage - 2; $i <= $currentPage + 2; $i++) {
			//if i is less than one then continue to next iteration
			if($i < 1) {
				continue;
			}

			if($i > $parent->fetchNumberPages()) {
				break;
			}

			if($i == $currentPage) {
				$str .= "<i>Page $i</i>";
			}
			else {
				$str .= "<a href=\"?page=$i$queryVars\">$i</a>";
			}
			($i == $currentPage + 2 || $i == $parent->fetchNumberPages()) ? $str .= " " : $str .= " | ";              //determine if to print bars or not
		}//end for

		if (!$parent->isLastPage()) {
			if($currentPage != $parent->fetchNumberPages() && $currentPage != $parent->fetchNumberPages() -1 && $currentPage != $parent->fetchNumberPages() - 2)
			{
				//$str .= " &gt; <a href=\"?page=".$parent->fetchNumberPages()."$queryVars\" title=\"Last\">Last(".$parent->fetchNumberPages().") </a>";
				$str .= "  <a href=\"?page=".$parent->fetchNumberPages()."$queryVars\" title=\"Last\">Last</a> ";
			}
		}

		if(!$parent->isLastPage()) {
			$nextPage = $currentPage + 1;
			$str .= "<a href=\"?page=$nextPage$queryVars\"> next &gt;</a>";
		}
		$d = preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);


		if($d == 1){
			$str.= '<br><br><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- Wallpaper Site --><ins class="adsbygoogle"     style="display:inline-block;width:320px;height:50px"     data-ad-client="ca-pub-9078058205056222"     data-ad-slot="7563245679"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
		}else{
			$str.= '<br><br><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- GroovyLock --><ins class="adsbygoogle"style="display:inline-block;width:728px;height:90px"data-ad-client="ca-pub-9078058205056222"data-ad-slot="3602220878"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
		}


		return $str;
	}
}
?>